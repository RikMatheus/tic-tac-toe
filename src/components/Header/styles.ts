import styled from 'styled-components'

export const Container = styled.div`
    height: 3.5rem;
    background: #ccc;
    display: flex;

    .menu {
        background: #ddd;
        width: 3.5rem;
    }

    .title {
        padding: 0 2.5rem;
        flex-grow: 1;
    }

    .search {
        background: #ddd;
        width: 10rem;
    }
`