const date = new Date();

/** Tasks who will be populated in the database */
export const EXISTING_TASKS = [
  {
    title: 'Do homework',
    description: 'Do math and english homework',
    priority: 1,
    done: false,
    deadline: new Date(date.setDate(date.getDate())).toISOString(),
  },
  {
    title: 'Do homework',
    description: 'Do math and english homework',
    priority: 1,
    done: true,
    deadline: new Date(date.setDate(date.getDate() + 1)).toISOString(),
  },
  {
    title: "Buy the dog's food",
    priority: 2,
    done: false,
    deadline: new Date(date.setDate(date.getDate())).toISOString(),
  },
  {
    title: 'Pay water bill',
    description: 'R$ 105.00',
    priority: 2,
    done: true,
    deadline: new Date(date.setDate(date.getDate() + 1)).toISOString(),
  },
  {
    title: 'Pay back ricardo',
    description: 'R$ 300.00',
    priority: 2,
    done: false,
    deadline: new Date(date.setDate(date.getDate() + 1)).toISOString(),
  },
  {
    title: "Buy Anna's Christmas gift.",
    description: '',
    priority: 2,
    done: true,
    deadline: new Date(date.setDate(date.getDate() + 1)).toISOString(),
  },
];
