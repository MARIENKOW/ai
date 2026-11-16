import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { getPathnameWithoutLocale } from "@/helpers/proxy/proxy.path.helper";
import AuthAdminService from "@/services/auth/admin/auth.admin.service";
import { $apiServer } from "@/utils/api/fetch.server";
import { isTokenExpired } from "@/helpers/jwt-token.helper";
import { parseSetCookie } from "next/dist/compiled/@edge-runtime/cookies";

const adminAuth = new AuthAdminService($apiServer);

const forwardSetCookies = (source: Response, target: NextResponse) => {
    source.headers.getSetCookie()?.forEach((cookie) => {
        const cookieRes = parseSetCookie(cookie);
        if (!cookieRes) return;
        target.cookies.set(cookieRes.name, cookieRes.value, cookieRes);
    });
};

// Все страницы приложения — админские: юзерской части на фронте нет.
// Обновляем access-токен админа, если он истёк; редиректы на логин делают серверные обёртки страниц.
export default async function Mid(req: NextRequest) {
    const { pathname } = getPathnameWithoutLocale(req.nextUrl.pathname);

    const res = createMiddleware(routing)(req);
    res.headers.set("x-pathname", pathname);

    const accessTokenAdmin = req.cookies.get("accessTokenAdmin")?.value;
    if (accessTokenAdmin && isTokenExpired(accessTokenAdmin)) {
        try {
            const refreshResponse = await adminAuth.refresh();
            forwardSetCookies(refreshResponse, res);
        } catch {
            // refresh не удался — страница сама покажет логин через AdminPrivateWrapper
        }
    }
    return res;
}

export const config = {
    matcher: [
        "/((?!api|nextApi|_next/static|_next/image|favicon.ico|.*\\..*).*)",
    ],
};
