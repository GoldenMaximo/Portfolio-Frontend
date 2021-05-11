export const isMobileCheck = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export const navigateWithTransition = (router, path) => {
    document.body.classList.add('fadeOut');

    setTimeout(() => {
        router.push(path);
    }, 500);
};
