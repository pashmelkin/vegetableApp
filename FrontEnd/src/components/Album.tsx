import React from 'react';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright';


export default function Album() {
    return (
<React.Fragment>
        {/* Footer */}
    <footer >
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            my lovely footer!
        </Typography>
        <Copyright />
    </footer>
    {/* End footer */}
</React.Fragment>
    )
}
