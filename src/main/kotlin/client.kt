import react.dom.render
import kotlinext.js.require
import kotlinx.browser.document
import kotlinx.browser.window

fun main() {
    require("bootstrap/dist/css/bootstrap.min.css")

    window.onload = {
        render(document.getElementById("root")) {
            child(Paces::class) {
                attrs {
                    name = "Kotlin/JS"
                }
            }
        }
    }
}
