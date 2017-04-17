
describe("Turns a base ten number into Roman Numberals.", function() {

    it("1 should return I.", function() {
        expect("I").toEqual(solution(1));
    });

    it("4 should return IV.", function() {
        expect("IV").toEqual(solution(4));
    });

    it("1000 should return M.", function() {
        expect("M").toEqual(solution(1000));
    });

    it("1990 should return MCMXC.", function() {
        expect("MCMXC").toEqual(solution(1990));
    });

    it("2007 should be MMVII.", function() {
        expect("MMVII").toEqual(solution(2007));
    });

    it("1001 should be MI.", function() {
        expect("MI").toEqual(solution(1001));
    });

    it("2008 should be MMVIII.", function() {
        expect("MMVIII").toEqual(solution(2008));
    });

    it("345 should be CCCXLV.", function() {
        expect("CCCXLV").toEqual(solution(345));
    });

});
