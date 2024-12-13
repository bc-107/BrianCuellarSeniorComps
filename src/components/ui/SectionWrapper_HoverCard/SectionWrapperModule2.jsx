import React from "react";

const SectionWrapper = ({ className = "", children }) => {
    return (
        <section className={`${className} mb-12`}>
            <div className="container mx-auto p-6">{children}</div>
        </section>
    );
};

export default SectionWrapper;
