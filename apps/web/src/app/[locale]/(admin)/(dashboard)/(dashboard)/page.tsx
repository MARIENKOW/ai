import { NAV_GROUPS } from "@/app/[locale]/(admin)/(dashboard)/(dashboard)/nav.config";
import AuthErrorElement from "@/components/feedback/error/AuthErrorElement";
import MobileNavigation from "@/components/layout/navigation/MobileNavigation";
import { StyledTypography } from "@/components/ui/StyledTypography";
import { getAdminAuth } from "@/utils/cache/admin.cache.me";
import { Box } from "@mui/material";
import { getTranslations } from "next-intl/server";

export default async function AdminHome() {
    const { admin } = await getAdminAuth();
    const t = await getTranslations();
    return (
        <>
            {/* Заглушка — здесь будет генерация. Одинаковая для ADMIN и SUPERADMIN */}
            <Box
                flex={1}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ display: { xs: "none", md: "flex" } }}
            >
                <StyledTypography variant={"h6"} color="text.secondary">
                    {t("pages.admin.placeholder")}
                </StyledTypography>
            </Box>

            <Box
                flex={1}
                flexDirection={"column"}
                sx={{ display: { xs: "flex", md: "none" } }}
            >
                {admin ? (
                    <MobileNavigation config={NAV_GROUPS(admin.role)} />
                ) : (
                    <AuthErrorElement />
                )}
            </Box>
        </>
    );
}
