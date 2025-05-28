// src/app/(Pages)/designs/[category]/layout.jsx
export default function CategoryLayout({ children, modal }) {
    return (
        <>
            {children}
            {modal}
        </>
    );
}