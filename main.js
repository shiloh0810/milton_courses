firebase.initializeApp({
  apiKey: "AIzaSyBiX9yJ4DoRd8hTGdGkbDhO-fIGO2fYX0E",
  authDomain: "miltoncourses.firebaseapp.com",
  databaseURL: "https://miltoncourses.firebaseio.com",
  projectId: "miltoncourses",
  storageBucket: "miltoncourses.appspot.com",
  messagingSenderId: "763338172558"
});

const db = firebase.database()

function addCourse(name, credit, subject, teacher, description) {
  const ref = db.ref('courses')
  ref.push({
    name: name,
    subject: subject,
    credit: credit,
    teacher: teacher,
    description: description
  })
}

function addAllCourses() {
  addCourse('Algebra 1 with Geometry', 1, 'math', 'unknown', 'unknown')
  addCourse('Geometry', 1, 'math', 'unknown', 'unknown')
  addCourse('Algebra 2', 1, 'math', 'unknown', 'unknown')
  addCourse('Precalculus(Honors)', 1, 'math', 'unknown', 'unknown')
  addCourse('Precalculus(Regular)', 1, 'math', 'unknown', 'unknown')
  addCourse('Precalculus(Foundation)', 1, 'math', 'unknown', 'unknown')
  addCourse('Calculus(Honors)', 1, 'math', 'unknown', 'unknown')
  addCourse('Calculus(Regular)', 1, 'math', 'unknown', 'unknown')
  addCourse('Calculus and Applied Economics (Honors)', 1, 'math', 'unknown', 'unknown')
  addCourse('Calculus(Accelerated)', 1, 'math', 'unknown', 'unknown')
  addCourse('Stats (Honors)', 1, 'math', 'unknown', 'unknown')
  addCourse('Stats (Regular)', 1, 'math', 'unknown', 'unknown')
  addCourse('Advanced Statistical Methods (Honors)', 1, 'math', 'unknown', 'unknown')
  addCourse('Advanced Calculus and Mathematical Statistics Methods (Honors)', 1, 'math', 'unknown', 'unknown')
  addCourse('Multivariable Calculus', 1, 'math', 'unknown', 'unknown')
  addCourse('Abstract Algebra and Group Theory', 1, 'math', 'unknown', 'unknown')
  addCourse('Advanced Topics in Mathematics', 1, 'math', 'unknown', 'unknown')
  addCourse('Discrete Mathematics Seminar', 0.5, 'math', 'unknown', 'unknown')
  addCourse('Mathematics and Art', 0.5, 'math', 'unknown', 'unknown')
  addCourse('Computer Programming 1', 0.5, 'programming', 'unknown', 'unknown')
  addCourse('Computer Programming 2', 0.5, 'programming', 'unknown', 'unknown')
  addCourse('Computer Programming 2&3', 1, 'programming', 'unknown', 'unknown')
  addCourse('Computer Programming 3', 0.5, 'programming', 'unknown', 'unknown')
  addCourse('Computer Programming 4', 0.5, 'programming', 'unknown', 'unknown')
  addCourse('Applied Engineering & Design', 0.5, 'programming', 'unknown', 'unknown')
  addCourse('French 1', 1, 'language', 'unknown', 'unknown')
  addCourse('French 1P', 1, 'language', 'unknown', 'unknown')
  addCourse('French 2', 1, 'language', 'unknown', 'unknown')
  addCourse('French 2 (Honors)', 1, 'language', 'unknown', 'unknown')
  addCourse('French 3', 1, 'language', 'unknown', 'unknown')
  addCourse('French 3 (Honors)', 1, 'language', 'unknown', 'unknown')
  addCourse('French 4', 1, 'language', 'unknown', 'unknown')
  addCourse('French 4 (AP)', 1, 'language', 'unknown', 'unknown')
  addCourse('French 5 (Honors): A Further Exploration of Literature', 1, 'language', 'unknown', 'unknown')
  addCourse('French 5: The Francophone World', 0.5, 'language', 'unknown', 'unknown')
  addCourse('French 5: Twentieth-Century France Through Its Cinema', 0.5, 'language', 'unknown', 'unknown')
  addCourse('French 6: Advanced Studies', 0.5, 'language', 'unknown', 'unknown')
  addCourse('Spanish 1', 1, 'language', 'unknown', 'unknown')
  addCourse('Spanish 1P', 1, 'language', 'unknown', 'unknown')
  addCourse('Spanish 2', 1, 'language', 'unknown', 'unknown')
  addCourse('Spanish 2 (Honors)', 1, 'language', 'unknown', 'unknown')
  addCourse('Spanish 2/3 (Accelerated)', 1, 'language', 'unknown', 'unknown')
  addCourse('Spanish 3', 1, 'language', 'unknown', 'unknown')
  addCourse('Spanish 3 (Honors)', 1, 'language', 'unknown', 'unknown')
  addCourse('Spanish 4: Topics in Hispanic Culture and Literature', 1, 'language', 'unknown', 'unknown')
  addCourse('Spanish 4 (Honors)', 1, 'language', 'unknown', 'unknown')
  addCourse('Spanish 5: Inside Latin America', 1, 'language', 'unknown', 'unknown')
  addCourse('Spanish 5: Discovering El Caribe', 1, 'language', 'unknown', 'unknown')
  addCourse('Spanish 5 (Honors)', 1, 'language', 'unknown', 'unknown')
  addCourse('Advanced Topic in Spanish', 1, 'language', 'unknown', 'unknown')
  addCourse('Chinese 1', 1, 'language', 'unknown', 'unknown')
  addCourse('Chinese 1P', 1, 'language', 'unknown', 'unknown')
  addCourse('Chinese 2', 1, 'language', 'unknown', 'unknown')
  addCourse('Chinese 3', 1, 'language', 'unknown', 'unknown')
  addCourse('Chinese 4', 1, 'language', 'unknown', 'unknown')
  addCourse('Chinese 5', 1, 'language', 'unknown', 'unknown')
  addCourse('Chinese 5 (Honors)', 1, 'language', 'unknown', 'unknown')
  addCourse('Advanced Topics in Chinese', 0.5, 'language', 'unknown', 'unknown')
  addCourse('Chinese Literature', 1, 'language', 'unknown', 'unknown')
  addCourse('Chinese: Major Issues in 20th Century China', 1, 'language', 'unknown', 'unknown')
  addCourse('Class IV Physics', 1, 'science', 'unknown', 'unknown')
  addCourse('Physics', 1, 'english', 'science', 'unknown')
  addCourse('Chemistry', 1, 'english', 'science', 'unknown')
  addCourse('Chemistry (Honors)', 1, 'science', 'unknown', 'unknown')
  addCourse('Biology', 1, 'english', 'science', 'unknown')
  addCourse('Biology (Honors)', 1, 'science', 'unknown', 'unknown')
  addCourse('Advanced Biology', 1, 'science', 'unknown', 'unknown')
  addCourse('Advanced Chemistry', 1, 'science', 'unknown', 'unknown')
  addCourse('Advanced Environmental science', 1, 'english', 'unknown', 'unknown')
  addCourse('Advanced Physics', 1, 'science', 'unknown', 'unknown')
  addCourse('Neuroscience', 1, 'science', 'unknown', 'unknown')
  addCourse('Human Anatomy and Physiology', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Marine Science', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Obervational Astronomy', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Futorology: Rise of the Machine', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Molecular Genetics 1', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Nuclear Physics', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Organic Chemistry 1', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Cosmology and Modern Physics', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Issues in Environmental Science: Challenges for the Twenty-first Century', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Futorology: Future of Humanity', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Molecular Genetics 2', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Organic Chemistry 2', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Introduction to Aerodynamics', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Engineering the Future', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Geology', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Science in the Modern Age', 0.5, 'science', 'unknown', 'unknown')
  addCourse('Class IV English', 1, 'english', 'unknown', 'unknown')
  addCourse('Perspectives: Genre and Culture', 1, 'english', 'unknown', 'unknown')
  addCourse('Founding Voices: Literature from the Ancient World through the Renaissance', 1, 'english', 'unknown', 'unknown')
  addCourse('Performing Literature', 1, 'english', 'unknown', 'unknown')
  addCourse('Seeing Literature', 1, 'english', 'unknown', 'unknown')
  addCourse('Contemporary Literature in Context', 1, 'english', 'unknown', 'unknown')
  addCourse('Literature and the Human Condition', 1, 'english', 'unknown', 'unknown')
  addCourse('American Literature', 1, 'english', 'unknown', 'unknown')
  addCourse('Man and the Natural World', 1, 'english', 'unknown', 'unknown')
  addCourse('Studies in English and American Literature', 1, 'english', 'unknown', 'unknown')
  addCourse('Reading Consciousness', 1, 'english', 'unknown', 'unknown')
  addCourse('The Craft of Non-Fiction', 1, 'english', 'unknown', 'unknown')
  addCourse('Fiction', 1, 'english', 'unknown', 'unknown')
  addCourse('Literature and the Nature of Reality', 1, 'english', 'unknown', 'unknown')
  addCourse('Modern Comparative Literature', 1, 'english', 'unknown', 'unknown')
  addCourse('Philosophy and Literature', 1, 'english', 'unknown', 'unknown')
  addCourse('Shakesphere', 1, 'english', 'unknown', 'unknown')
  addCourse('Themes in Contemporary World Literature', 1, 'english', 'unknown', 'unknown')
  addCourse('Three Writers in Depth', 1, 'english', 'unknown', 'unknown')
  addCourse('We Are What We Read', 1, 'english', 'unknown', 'unknown')
  addCourse('Hamlet', 0.5, 'english', 'unknown', 'unknown')
  addCourse('Understanding Intersectionality', 0.5, 'english', 'unknown', 'unknown')
  addCourse('Journalism', 0.5, 'english', 'unknown', 'unknown')
  addCourse('The Power of Poetry through Close Reading and Analysis', 0.5, 'english', 'unknown', 'unknown')
  addCourse('Project Story', 0.5, 'english', 'unknown', 'unknown')
  addCourse('Creative Writing', 0.5, 'english', 'unknown', 'unknown')
  addCourse('Advanced Creative Writing', 0.5, 'english', 'unknown', 'unknown')
  addCourse('Advanced Creative Writing 2', 0.5, 'english', 'unknown', 'unknown')
  addCourse('Exposition', 1, 'english', 'unknown', 'unknown')
  addCourse('Ancient Civilizations', 1, 'history', 'unknown', 'unknown')
  addCourse('Modern World History: Class IV', 1, 'history', 'unknown', 'unknown')
  addCourse('Modern World History', 1, 'history', 'unknown', 'unknown')
  addCourse('The United States in the Modern World 1&2', 1, 'history', 'unknown', 'unknown')
  addCourse('United States History', 1, 'history', 'unknown', 'unknown')
  addCourse('African-American History', 0.5, 'history', 'unknown', 'unknown')
  addCourse('History of Modern China', 0.5, 'history', 'unknown', 'unknown')
  addCourse('History of the Middle East', 0.5, 'history', 'unknown', 'unknown')
  addCourse('Topics in Modern History', 0.5, 'history', 'unknown', 'unknown')
  addCourse('Asian American History', 0.5, 'history', 'unknown', 'unknown')
  addCourse('The Aztecs to High-Tech', 0.5, 'history', 'unknown', 'unknown')
  addCourse('Globalization and Islam', 0.5, 'history', 'unknown', 'unknown')
  addCourse('History of Civil Rights', 0.5, 'history', 'unknown', 'unknown')
  addCourse('Advanced Government and Politics', 0.5, 'history', 'unknown', 'unknown')
  addCourse('Comparative Government', 0.5, 'history', 'unknown', 'unknown')
  addCourse('Principles of Economics', 0.5, 'history', 'unknown', 'unknown')
  addCourse('Topics in Global Economics', 0.5, 'history', 'unknown', 'unknown')
  addCourse('Behavioral-Economics', 0.5, 'history', 'unknown', 'unknown')
  addCourse('Psycology Seminar', 1, 'history', 'unknown', 'unknown')
  addCourse('Topics in Psycology', 0.5, 'history', 'unknown', 'unknown')
  addCourse('Religions of the Middle East', 0.5, 'history', 'unknown', 'unknown')
  addCourse('Religions of Asia', 0.5, 'history', 'unknown', 'unknown')
  addCourse('Activism for Justice in a Digital World', 0.5, 'history', 'unknown', 'unknown')
}

function addReview(id, review){
  const ref = db.ref('reviews/'+id)
  ref.once('value').then(function(snapshot){
    if(snapshot.val() == null){
      ref.child('0').set(review)
    }
    else{
      ref.child(snapshot.val().length).set(review)
    }
  })
}

function getCourses(callback) {
  const ref = db.ref('courses')
  ref.once('value').then(function(snapshot) {
    callback(snapshot.val())
  })
}

function getCourse(cid, callback) {
  const ref = db.ref('courses/' + cid)
  ref.once('value').then(function(snapshot) {
    callback(snapshot.val())
  })
}

function updateRating(rating, course){
  const ref = db.ref('courses/' + course)
  ref.once('value').then(function(snapshot){
    if(snapshot.val().length == 0){
      updates['/' + rating] = rating;
      ref.update(updates)
    }
  })
}

$(() => {
  // Set up sidebar
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
  });

  // Set up courses
  getCourses((courses) => {
    for (let cid in courses) {
      const subjectElement = $(`#${courses[cid].subject}`);
      const courseElement = $(`<li><a class="class-link" href="#${cid}">` + courses[cid].name + '</a></li>')
      subjectElement.append(courseElement)
    }

    $('.class-link').click((e) => {
      const cid = e.target.href.substring(e.target.href.lastIndexOf('#') + 1);
      getCourse(cid, (course) => {
        console.log(course.description)
      })
    })
  });
})
