import React, { useState, useRef, useEffect, useCallback } from "react";
import FetchData from "./FetchData";
import { ProductItem } from "./ProductList";
import { Box, ImageList, CircularProgress, Alert } from '@mui/material';
import useWindowDimensions from "./WindowsDimension";
function Contents( ) {
    const [query] = useState("");
    const [page, setPage] = useState(20);
    const { loading, error, list } = FetchData(query, page);

    const { cols } = useWindowDimensions();
    const loader = useRef(null);
   
    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    return (
        <div className="App">
            <div>
                <Box
                    ml={10} mr={10}>
                    <ImageList variant="masonry"
                        cols={cols - 1}
                        gap={8}
                    >
                        {list.map((element, i) => (
                            <ProductItem key={i} item={element} />
                        ))}
                    </ImageList>
                </Box>
            </div>
            {loading && <CircularProgress color="success" />}
            {error && <Alert severity="error">This is an error alert — check it out!</Alert>}
            <div ref={loader} />
        </div>
    );
}

export default Contents;
