import kotlin.math.roundToInt

enum class PaceMeasurement(val label: String, val kmSpeedMultiplier: Double) {
    FOUR_HUNDRED_METRES("400m", 0.4),
    KM("KM", 1.0),
    MILE("Mile", 1.609),
    FIVE_KM("5KM", 5.0),
    TEN_KM("10KM", 10.0),
    TEN_MILES("10 miles", 16.09),
    HALF_MARATHON("Half Marathon", 21.0975),
    MARATHON("Marathon", 42.195);

    fun minutesAndSeconds(kmSpeedInSeconds: Int): String {
        val seconds = (kmSpeedInSeconds * kmSpeedMultiplier).roundToInt()
        val minutes = seconds / 60
        val hoursString = if (minutes > 60) "${minutes / 60}:" else ""
        val minutesString = (seconds % (60 * 60) / 60).toString().padStart(2, '0')
        val secondsString = (seconds % 60).toString().padStart(2, '0')
        return "$hoursString$minutesString:$secondsString"
    }
}
