module.exports = (w, h, we) => (`${w?"t":"f"}${h?"t":"f"}${we?"t":"f"}`.match(`^(?!f.t)()(f..?|.t.?|..t)?.*`) === null) ? undefined : !!`${w?"t":"f"}${h?"t":"f"}${we?"t":"f"}`.match(`^(?!f.t)()(f..?|.t.?|..t)?.*`)[2]

//now this is a l g o r i t h m d e s i g n
