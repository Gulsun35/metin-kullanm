let Nasıl_hissediyorum = ""
input.onButtonPressed(Button.A, function () {
    Nasıl_hissediyorum = "Mutlu"
})
input.onButtonPressed(Button.B, function () {
    Nasıl_hissediyorum = "Uzgun"
})
basic.forever(function () {
    if (Nasıl_hissediyorum == "Mutlu") {
        basic.showIcon(IconNames.Happy)
    } else if (Nasıl_hissediyorum == "Uzgun") {
        basic.showIcon(IconNames.Sad)
    }
})
