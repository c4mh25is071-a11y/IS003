var app = angular.module("libraryApp", []);

// Parent Controller
app.controller("ParentController", function($scope) {

    // Shared book list
    $scope.books = [];

    // Add single book
    $scope.addBook = function() {

        if ($scope.newBook &&
            $scope.newBook.trim() !== "") {

            $scope.books.push($scope.newBook.trim());

            $scope.newBook = "";
        }
    };

});

// Child Controller
app.controller("ChildController", function($scope) {

    // Add multiple books
    $scope.addMultipleBooks = function() {

        if ($scope.multipleBooks &&
            $scope.multipleBooks.trim() !== "") {

            var bookArray = $scope.multipleBooks.split(",");

            angular.forEach(bookArray, function(book) {

                book = book.trim();

                if (book !== "") {
                    $scope.books.push(book);
                }

            });

            $scope.multipleBooks = "";
        }
    };

    // Delete book
    $scope.deleteBook = function(index) {

        $scope.books.splice(index, 1);

    };

});
