module.exports = db => ({
  Query: {
    allTodos: async () =>
      await db
        .collection("todos")
        .find()
        .toArray()
  }
});
