import React, { useEffect, useState } from "react";

import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";

const Books = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }

  const { books } = useLoaderData();

  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {books.map((book) => (
          <Book key={book.isbn13} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
