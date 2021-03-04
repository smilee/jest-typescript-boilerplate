function testFunction(): string {
  return 'Hello, world!';
}

describe('testFunction()', () => {
  context('when the function is run', () => {
    it('greets the world', () => {
      expect(testFunction()).toBe('Hello, world!');
    });
  });
});

export { };