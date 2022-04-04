//== Length
// options
export const LengthName=[
    {
        Option:"Option",
        Meter:'Metre',
        Milimitre:'Milimitre',
        Centimetre: 'Centimetre',
        Kilometre: 'Kilometre',
        Inche: 'Inche',
        Feet: 'Feet',
        Yards: 'Yards',
        Miles:'Miles'
    }
]
// calculate
export const Lengths=[
    {Meter: {
        Meter:1,
        Centimetre: 100,
        Milimitre:1000,
        Kilometre: 0.001,
        Inche: 39.3701,
        Feet: 3.28084,
        Yards: 1.09361,
        Miles:0.000621371
        }
    },
    {Centimetre:{
        Meter:0.01,
        Centimetre: 1,
        Milimitre:10,
        Kilometre: 1e-5,
        Inche: 0.393701,
        Feet: 0.0328084,
        Yards: 0.0109361,
        Miles:6.2137e-6}
    },
    {Milimitre:{
        Meter:0.001,
        Centimetre: 0.1,
        Milimitre:1,
        Kilometre: 0.0000001,
        Inche: 0.0393701,
        Feet: 0.00328084,
        Yards: 0.00109361,
        Miles:6.2137e-7
        }
    },
    {Kilometre:{
        Meter:1000,
        Centimetre: 100000,
        Milimitre:1000000,
        Kilometre: 1,
        Inche: 39370.1,
        Feet: 3280.84,
        Yards: 1093.61,
        Miles:0.621371
        }
    },
    {Inche:{
        Meter:0.0254,
        Centimetre: 2.54,
        Milimitre:25.4,
        Kilometre: 2.54e-5,
        Inche: 1,
        Feet: 0.0833,
        Yards: 0.0277,
        Miles:1.5783e-5
        }
    },
    {Feet:{
        Meter:0.3048,
        Centimetre: 30.48,
        Milimitre:304.8,
        Kilometre: 0.0003048,
        Inche: 12,
        Feet: 1,
        Yards: 0.333,
        Miles:0.000189394
        }
    },
    {Yards:{
        Meter:0.9144,
        Centimetre: 91.44,
        Milimitre:914.4,
        Kilometre: 0.0009144,
        Inche: 36,
        Feet: 3,
        Yards: 1,
        Miles:0.000568182
        }
    },
    {Miles:{
        Meter:1609.34,
        Centimetre: 160934,
        Milimitre:1609340,
        Kilometre: 1.60934,
        Inche: 63360,
        Feet: 5280,
        Yards: 1760,
        Miles:1
        }
    }
]


//== Bytes
export const Byte=[
    {
        Kilobytes:1024,
        Megabybtes:1048576,
        Gigaytes:1073741824,
        Terabytes: 1099511627776
    }
]