
// Student Management Mini Application
// Name: YOUR FULL NAME
// Department: YOUR DEPARTMENT

// Create AngularJS Module
var app = angular.module('studentApp', []);

// Parent Controller
app.controller('CollegeController', function($scope) {

    // College Name
    $scope.collegeName = "ABC College of Science";

});

// Child Controller
app.controller('StudentController', function($scope) {

    // Student Form Variables
    $scope.name = "";
    $scope.department = "";
    $scope.semester = "";
    $scope.marks = "";

    // Sample Student Names
    $scope.students = [
        "Rahul",
        "Priya",
        "Arun"
    ];

    // Initially hide student details
    $scope.showDetails = false;

    // Function to Add Student
    $scope.addStudent = function() {

        if ($scope.name && $scope.name.trim() !== "") {

            // Add student name to array
            $scope.students.push($scope.name.trim());

            // Clear name input
            $scope.name = "";

        } else {

            alert("Please enter student name!");

        }

    };

});
