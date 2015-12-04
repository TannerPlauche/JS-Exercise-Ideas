var app = angular.module("PoetryApp");

app.service("tempDB", function () {

  this.database = [

    {
      title: 'The Toy Eater',
      author: 'Shell Silverstein',
      body: 'Roses are red. Violets are blue. Roses are red. Violets are blue. Roses are red. Violets are blue.',
      _id: '123456789',
      type: "haiku"
    },
    {
      title: 'The Raven',
      author: 'Edgar Allen Poe',
      body: 'Once upon a midnight dreary, while I pondered, weak and weary,\
      Over many a quaint and curious volume of forgotten lore—\
      While I nodded,\
      nearly napping,\
      suddenly there came a tapping,\
      As of some one gently rapping,\
      rapping at my chamber door.“’Tis some visitor,\
      ”I muttered,\
      “tapping at my chamber door—\
      Only this and nothing more.”\
\
    Ah,\
      distinctly I remember it was in the bleak December;\
      And each separate dying ember wrought its ghost upon the floor.\
      Eagerly I wished the morrow;—vainly I had sought to borrow\
      From my books surcease of sorrow— sorrow\
      for the lost Lenore—\
      For the rare and radiant maiden whom the angels name Lenore—\
      Nameless here\
      for evermore.\
\
      And the silken,\
      sad,\
      uncertain rustling of each purple curtain\
      Thrilled me— filled me with fantastic terrors never felt before;\
      So that now,\
      to still the beating of my heart,\
      I stood repeating“’ Tis some visitor entreating entrance at my chamber door—\
      Some late visitor entreating entrance at my chamber door;—\
      This it is and nothing more.”\
\
      Presently my soul grew stronger;hesitating then no longer,\
      “Sir,\
      ”said I,\
      “or Madam,\
      truly your forgiveness I implore;\
      But the fact is I was napping,\
      and so gently you came rapping,\
      And so faintly you came tapping,\
      tapping at my chamber door,\
      That I scarce was sure I heard you”— here I opened wide the door;—\
      Darkness there and nothing more.\
\
      Deep into that darkness peering,\
      long I stood there wondering,\
      fearing,\
      Doubting,\
      dreaming dreams no mortal ever dared to dream before;\
      But the silence was unbroken,\
      and the stillness gave no token,\
      And the only word there spoken was the whispered word,\
      “Lenore ? ”\
      This I whispered,\
      and an echo murmured back the word,\
      “Lenore!”—\
      Merely this and nothing more.\
\
      Back into the chamber turning,\
      all my soul within me burning,\
      Soon again I heard a tapping somewhat louder than before.“Surely,\
      ”said I,“\
      surely that is something at my window lattice;\
      Let me see,\
      then,\
      what thereat is,\
      and this mystery explore—\
      Let my heart be still a moment and this mystery explore;—’Tis the wind and nothing more!”\
',
      _id: '223456789',
      type: "haiku"
    },
    {
      title: 'Thanatopsis',
      author: 'William Cullen Bryant',
      body: 'Roses are red. Violets are blue.',
      _id: '323456789',
      type: "haiku"
    },
    {
      title: 'Poem 1',
      author: 'Author 1',
      body: 'Roses are red. Violets are blue. Roses are red. Violets are blue. Roses are red. Violets are blue. Roses are red. Violets are blue.',
      _id: '423456789',
      type: "inspiration"
    },
    {
      title: 'Poem 2',
      author: 'Author 2',
      body: 'Roses are red. Violets are blue.',
      _id: '523456789',
      type: "inspiration"
    },
    {
      title: 'Poem 3',
      author: 'Author 3',
      body: 'Roses are red. Violets are blue.',
      _id: '623456789',
      type: "inspiration"
    },
    {
      title: 'Poem 1',
      author: 'Author 1',
      body: 'Roses are red. Violets are blue.',
      _id: '723456789',
      type: "funny"
    },
    {
      title: 'Poem 2',
      author: 'Author 2',
      body: 'Roses are red. Violets are blue.',
      _id: '823456789',
      type: "funny"
    },
    {
      title: 'Poem 3',
      author: 'Author 3',
      body: 'Roses are red. Violets are blue.',
      _id: '923456789',
      type: "funny"
    }
  ]

})