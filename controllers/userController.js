import routes from "../router";

export const getJoin = (req, res) => {
    res.render("join", {pageTitle : "Join"});
};

export const postJoin = (req, res) => {
    const{
        body :{ name, email, password, verify_password }
    } = req;
    if(password != verify_password){
        res.status(400);
        res.render("join", {pageTitle : "Join"});
    } else {
        res.redirect(routes.home);
    }
}


export const getLogin = (req, res) => {
    res.render("login", {pageTitle : "Login"});
};
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    res.redirect(routes.home);
};


export const users = (req, res) => res.render("Users", {pageTitle : "Users"});
export const usersDetail = (req, res) => res.render("usersDetail", {pageTitle : "Users Detail"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle : "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle : "Change Password"});