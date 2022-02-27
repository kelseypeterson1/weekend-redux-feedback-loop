export default function FeedbackItem({row}) {
    return (
        <>
            <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                    {row.feeling}
                </StyledTableCell>
                <StyledTableCell align="right">{row.understanding}</StyledTableCell>
                <StyledTableCell align="right">{row.support}</StyledTableCell>
                <StyledTableCell align="right">{row.comments}</StyledTableCell>
                <StyledTableCell align="right">delete icon</StyledTableCell>
            </StyledTableRow>
        </>
    )
}