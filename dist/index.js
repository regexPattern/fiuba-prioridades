import { chromium } from "playwright";
import notifier from "node-notifier";
const LOGIN_PAGE_URL = "https://guaraniautogestion.fi.uba.ar/g3w/acceso?auth=form";
var LoginStatus;
(function (LoginStatus) {
    LoginStatus[LoginStatus["Success"] = 0] = "Success";
    LoginStatus[LoginStatus["Failure"] = 1] = "Failure";
})(LoginStatus || (LoginStatus = {}));
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.route(LOGIN_PAGE_URL, (route) => {
        route.continue({
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            postData: `usuario=${process.env.USUARIO}&password=${process.env.PASSWORD}`
        });
    });
    let loginStatus = LoginStatus.Failure;
    page.on("response", async (res) => {
        if (res.url() === LOGIN_PAGE_URL && res.status() === 302) {
            loginStatus = LoginStatus.Success;
        }
    });
    try {
        await page.goto(LOGIN_PAGE_URL);
    }
    catch {
        console.error("ERROR: No se pudo acceder al sitio web");
        await browser.close();
        return null;
    }
    if (loginStatus === LoginStatus.Failure) {
        console.error("ERROR: Credenciales Invalidas");
        await browser.close();
        return null;
    }
    const notificacionPrioridad = page.locator("#js-turno");
    let mensajeNotificacion = "No disponible";
    if (await notificacionPrioridad.isVisible()) {
        const [numeroPrioridad, fechaInscripcion] = (await notificacionPrioridad.innerText()).split(/:(.*)/s);
        mensajeNotificacion = `Prioridad: ${numeroPrioridad}
Fecha Inscripcion: ${fechaInscripcion}`;
    }
    await browser.close();
    notifier.notify({
        title: "FIUBA Prioridades",
        message: mensajeNotificacion
    });
})();
//# sourceMappingURL=index.js.map