import './BecomeAMember.module.scss';
function BecomeAMember({title}) {
    return (
        <button className={`btn-bc-member`}>
            {title || null}
        </button>
    );
}

export default BecomeAMember;