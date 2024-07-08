function handleSearch(event) {
    if (event.key === "Enter") {
        const query = document.getElementById('search-input').value.trim();

        if (query !== "") {
            const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+[\w-]{2,4}\/?/;

            if (urlPattern.test(query)) {
                // If the query matches a URL pattern, redirect to the URL
                let url = query;
                if (!/^https?:\/\//i.test(url)) {
                    url = 'http://' + url;
                }
                window.location.href = url;
            } else {
                // Otherwise, perform a Google search
                const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                window.location.href = url;
            }
        }
    }
}
