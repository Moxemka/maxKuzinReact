export default function navigateToBlockById(id){
    const itemTop = document.getElementById(id)?.offsetTop;
        // get top pos of element itemTop
        itemTop || id === 'main' ? window.scrollTo({ top: id === 'main' ? 0 : itemTop, behavior:'smooth' }) : console.log(`Element with id ${id} not found`);
}