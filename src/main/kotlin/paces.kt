import kotlinx.html.classes
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.*
import styled.*
import kotlin.math.roundToInt

external interface WelcomeProps : RProps {
    var name: String
}

data class WelcomeState(val name: String) : RState

@JsExport
class Paces(props: WelcomeProps) : RComponent<WelcomeProps, WelcomeState>(props) {

    init {
        state = WelcomeState(props.name)
    }

    override fun RBuilder.render() {
        styledDiv {
            css {
                +PacesStyles.tableWrapper
            }
            table {
                attrs.classes = setOf("table table-striped")
                thead {
                    attrs.classes = setOf("thead-light")
                    tr {
                        PaceMeasurement.values().map {
                            th { +it.label }
                        }
                    }
                }
                tbody {
                    for (kmSeconds in 180..360 step 1) {
                        tr {
                            PaceMeasurement.values().map {
                                td { +it.minutesAndSeconds(kmSeconds) }
                            }
                        }
                    }
                }
            }
        }
    }
}
