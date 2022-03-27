import generateTodo from "../generateTodo";

describe("generateTodo", () => {
  it("Should be defined", () => {
    expect(generateTodo).toBeDefined();
  });
  it("Should match snapshot", () => {
    expect(
      generateTodo({
        yetTodos: ["yet todo 1", "yet todo 2"],
        doneTodos: ["done todo 1", "done todo 2"],
      })
    ).toMatchInlineSnapshot(`
      "
      - [ ] yet todo 1
      - [ ] yet todo 2
      - [x] done todo 1
      - [x] done todo 2

      "
    `);
  });
});
