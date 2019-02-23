firebase.initializeApp({
  apiKey: "AIzaSyBiX9yJ4DoRd8hTGdGkbDhO-fIGO2fYX0E",
  authDomain: "miltoncourses.firebaseapp.com",
  databaseURL: "https://miltoncourses.firebaseio.com",
  projectId: "miltoncourses",
  storageBucket: "miltoncourses.appspot.com",
  messagingSenderId: "763338172558"
});
const db = firebase.database()

function addSubjectCourse(data){
  const ref = db.ref('subjects/'+data.subject)
  ref.once('value').then(function(snapshot){
    if(snapshot.val == null){
      ref.child(data.course).set(data.id)
    }
    else{
      const updates = {}
      updates['/' + data.course] = data.id;
      ref.update(updates)
    }
  })
}

addSubjectCourse({subject:'math', course:'precalc', id:'MPR3'});
addSubjectCourse({subject:'math', course:'calc', id:'CLC2'});
addSubjectCourse({subject:'math', course:'group', id:'asdf'});
addSubjectCourse({subject:'english', course:'performing', id:'adfad'});
addSubjectCourse({subject:'english', course:'reading consciousness', id:'addf'});
addSubjectCourse({subject:'english', course:'human condition', id:'asadfdf'});
addSubjectCourse({subject:'science', course:'physics', id:'MPR3'});
addSubjectCourse({subject:'science', course:'biology', id:'CLC2'});
addSubjectCourse({subject:'science', course:'chemistry', id:'asdf'});
addSubjectCourse({subject:'history', course:'ancient civilizations', id:'MPR3'});
addSubjectCourse({subject:'history', course:'us history', id:'CLC2'});
addSubjectCourse({subject:'history', course:'us in the modern world', id:'asdf'});
addSubjectCourse({subject:'arts', course:'drawing', id:'MPR3'});
addSubjectCourse({subject:'arts', course:'sculpture', id:'CLC2'});
addSubjectCourse({subject:'arts', course:'photography', id:'asdf'});


function addCourse(data){
  const ref = db.ref('courses')
  ref.once('value').then(function(snapshot){
    if(snapshot.val() == null){
      ref.child(data.course).child('info').set({rating:data.rating, teacher:data.teacher, credit:data.credit, info:data.info})
    }
    else{
      const updates = {}
      updates['/' + data.course] = {rating:data.rating, teacher:data.teacher, credit:data.credit, infos:data.info}
      ref.update(updates)
    }
  })
}


addCourse({course:'Algebra 1 with Geometry', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Geometry', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Algebra 2', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Precalculus(Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Precalculus(Regular)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Precalculus(Foundation)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Calculus(Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Calculus(Regular)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Calculus and Applied Economics (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Calculus(Accelerated)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Stats (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Stats (Regular)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Advanced Statistical Methods (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Advanced Calculus and Mathematical Statistics Methods (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Multivariable Calculus', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Abstract Algebra and Group Theory', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Advanced Topics in Mathematics', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Discrete Mathematics Seminar', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Mathematics and Art', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Computer Programming 1', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Computer Programming 2', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Computer Programming 2&3', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Computer Programming 3', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Computer Programming 4', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Applied Engineering & Design', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'French 1', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 1P', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 2', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 2 (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 3', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 3 (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 4', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 4 (AP)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 5 (Honors): A Further Exploration of Literature', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 5: The Francophone World', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'French 5: Twentieth-Century France Through Its Cinema', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'French 6: Advanced Studies', rating:null, teacher:'N/A', credit:0.5, info:'-'})


addCourse({course:'Spanish 1', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Spanish 1P', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Spanish 2', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Spanish 2 (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Spanish 2/3 (Accelerated)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Spanish 3', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Spanish 3 (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Spanish 4: Topics in Hispanic Culture and Literature', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Spanish 4 (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Spanish 5: Inside Latin America', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Spanish 5: Discovering El Caribe', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Spanish 5 (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Advanced Topic in Spanish', rating:null, teacher:'N/A', credit:1, info:'-'})


addCourse({course:'Chinese 1', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Chinese 1P', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Chinese 2', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Chinese 3', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Chinese 4', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Chinese 5', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Chinese 5 (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Advanced Topics in Chinese', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Chinese Literature', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Chinese: Major Issues in 20th Century China', rating:null, teacher:'N/A', credit:1, info:'-'})


addCourse({course:'Class IV Physics', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Physics', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Chemistry', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Chemistry (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Biology', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Biology (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Advanced Biology', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Advanced Chemistry', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Advanced Environmental Science', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Advanced Physics', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Neuroscience', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Human Anatomy and Physiology', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Marine Science', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Obervational Astronomy', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Futorology: Rise of the Machine', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Molecular Genetics 1', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Nuclear Physics', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Organic Chemistry 1', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Cosmology and Modern Physics', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Issues in Environmental Science: Challenges for the Twenty-first Century', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Futorology: Future of Humanity', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Molecular Genetics 2', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Organic Chemistry 2', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Introduction to Aerodynamics', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Engineering the Future', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Geology', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Science in the Modern Age', rating:null, teacher:'N/A', credit:0.5, info:'-'})


addCourse({course:'Class IV English', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Perspectives: Genre and Culture', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Founding Voices: Literature from the Ancient World through the Renaissance', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Performing Literature', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Seeing Literature', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Contemporary Literature in Context', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Literature and the Human Condition', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'American Literature', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Man and the Natural World', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Studies in English and American Literature', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Reading Consciousness', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'The Craft of Non-Fiction', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Fiction', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Literature and the Nature of Reality', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Modern Comparative Literature', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Philosophy and Literature', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Shakesphere', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Themes in Contemporary World Literature', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Three Writers in Depth', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'We Are What We Read', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Hamlet', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Understanding Intersectionality', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Journalism', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'The Power of Poetry through Close Reading and Analysis', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Project Story', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Creative Writing', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Advanced Creative Writing', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Advanced Creative Writing 2', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Exposition', rating:null, teacher:'N/A', credit:1, info:'-'})


addCourse({course:'Ancient Civilizations', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Modern World History: Class IV', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Modern World History', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'The United States in the Modern World 1&2', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'United States History', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'African-American History', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'History of Modern China', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'History of the Middle East', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Topics in Modern History', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Asian American History', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'The Aztecs to High-Tech', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Globalization and Islam', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'History of Civil Rights', rating:null, teacher:'N/A', credit:0.5, info:'-'})

addCourse({course:'Advancedf Government and Politics', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Comparative Government', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Principles of Economics', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Topics in Global Economics', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Behavioral-Economics', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Psycology Seminar', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Topics in Psycology', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Religions of the Middle East', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Religions of Asia', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Activism for Justice in a Digital World', rating:null, teacher:'N/A', credit:0.5, info:'-'})




addCourse({course:'precalc', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'calc', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'group', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'performing', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'reading consciousness', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'human condition', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'physics', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'biology', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'chemistry', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'ancient civilizations', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'us history', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'us in the modern world', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'drawing', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'sculpture', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'photography', rating:5, teacher:'precalc', credit:1, info:'testinfo'})

function addReview(data){
  const ref = db.ref('courses/'+data.course+'/reviews')
  ref.once('value').then(function(snapshot){
    if(snapshot.val() == null){
      console.log('hello')
      ref.child('0').set(data.review)
    }
    else{
      ref.child(snapshot.val().length).set(data.review)
    }
  })
}
addReview({course:'human condition', review:'very good'})

//add callback here
function getCourses(){
  const ref = db.ref('subjects')
  ref.once('value').then(function(snapshot){
    for (var key in snapshot.val()) {
      console.log(snapshot.val()[key])
    }
    //Scallback(snapshot.val())
  })
}
getCourses();
function updateRating(rating, course){
  const ref = db.ref('courses/'+course)
  ref.once('value').then(function(snapshot){
    if(snapshot.val().length == 0){
      updates['/' + rating] = data.id;
      ref.update(updates)
    }
    })
}
