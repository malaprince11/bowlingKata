interface Party {
  tour1: number;
  tour2: number;
}
interface Board {
  partyList: Party[];
}
describe("test for bowling rule calculator", () => {
  function getScore(scoreBoard: {}[]) {
    return 0;
  }
  it("test n1 a definir ", () => {
    // const getScore = (score: number[]) => {
    // const initialValue = 0;

    //   const total = score.reduce((prevTour , actualTour) =>
    //     prevTour + actualTour, initialValue

    //   )
    // };

    //given
    const tour1 = 5;
    const tour2 = 3;

    //when
    const result = getScore(tour1, tour2);

    //then
    expect(result).toEqual(8);
  });
  it("get the score if player make a spare ", () => {
    const tour1 = 5;
    const tour2 = 3;
    const tour3 = 5;
    const tour4 = 3;
  });
});
