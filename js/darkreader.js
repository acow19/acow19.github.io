var isDarkReaderEnabled =
    "querySelector" in document &&
    !!document.querySelector("meta[name=darkreader]");

if (isDarkReaderEnabled)
    $("body").addClass("dark-reader");