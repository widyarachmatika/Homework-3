const Converter = require('./converter');

Test('convert celcius', ()=> {
    expect(()=>conv.operate('fahrenheit', 100)).not.toThrow();
    expect(conv.operate('fahrenheit', 100)).toBe(212);
});

Test('convert celcius', ()=> {
    expect(()=>conv.operate('reamur', 32)).not.toThrow();
    expect(conv.operate('reamur', 32)).toBe(40);
});

Test('convert celcius', ()=> {
    expect(()=>conv.operate('kelvin', 100)).not.toThrow();
    expect(conv.operate('kelvin', 100)).toBe(373.15);
});

Test('convert fahrenheit', ()=> {
    expect(()=>conv.operate('reamur', 100)).not.toThrow();
    expect(conv.operate('reamur', 100)).toBe(30.22);
});

Test('convert fahrenheit', ()=> {
    expect(()=>conv.operate('kelvin', 100)).not.toThrow();
    expect(conv.operate('kelvin', 100)).toBe(310.93);
});

Test('convert reamur', ()=> {
    expect(()=>conv.operate('kelvin', 100)).not.toThrow();
    expect(conv.operate('kelvin', 100)).toBe(398.15);
});

