import delay from './delay';

const modules = [
  {
    "_id": "5b878b0d756980138eb251e9",
    "module": "ambassadorProducts",
    "displayName": "Ambassador Products",
    "description": " Quisque et nunc nisl. Sed id egestas sapien. Phasellus posuere dui euismod lacinia gravida. Sed a augue sed elit feugiat maximus a sit amet libero.",
    "pages": [
      "productsListPage",
      "productDetailsPage"
    ]
  },
  {
    "_id": "5b8945307569804f80fd3cdc",
    "module": "productPages",
    "displayName": "Product Pages",
    "description": "Praesent accumsan est id est sodales, at interdum lacus rhoncus. Mauris volutpat quam tortor, ac viverra nisl sollicitudin id. ",
    "pages": [
      "productsListPage",
      "productDetailsPage"
    ]
  }
];

class ModuleApi {
  static getAllModules() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], modules));
      }, delay);
    });
  }

  static saveCourse(course) {
    // course = Object.assign({}, course); // to avoid manipulating object passed in.
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     // Simulate server-side validation
    //     const minCourseTitleLength = 1;
    //     if (course.title.length < minCourseTitleLength) {
    //       reject(`Title must be at least ${minCourseTitleLength} characters.`);
    //     }
    //
    //     if (course.id) {
    //       const existingCourseIndex = courses.findIndex(a => a.id == course.id);
    //       courses.splice(existingCourseIndex, 1, course);
    //     } else {
    //       //Just simulating creation here.
    //       //The server would generate ids and watchHref's for new courses in a real app.
    //       //Cloning so copy returned is passed by value rather than by reference.
    //       course.id = generateId(course);
    //       course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
    //       courses.push(course);
    //     }
    //
    //     resolve(course);
    //   }, delay);
    // });
  }

  static deleteCourse(courseId) {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     const indexOfCourseToDelete = courses.findIndex(course => {
    //       course.id == courseId;
    //     });
    //     courses.splice(indexOfCourseToDelete, 1);
    //     resolve();
    //   }, delay);
    // });
  }
}

export default ModuleApi;
