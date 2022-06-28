import React from 'react';

function HeaderComponent(props) {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="http://javaguides.net" className="navbar-brand">User Management Application</a>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default HeaderComponent;