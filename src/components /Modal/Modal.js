import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Modal = ({ closeModal, selectedMountId, mounts }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Do something with the id, like finding the selected mount
      const mount = mounts.find(mount => mount.id === id);
      // Perform actions with the selected mount...
    }
  }, [id, mounts]);

  const mount = mounts.find(mount => mount.id === selectedMountId);

  return (
    <div className="modal">
      <button onClick={closeModal}>
        {" "}
        <i className="fa fa-close"></i>{" "}
      </button>
      {mount && (
        <div>
          <h3>{mount.name}</h3>
          <img src={mount.image} alt={mount.name} className="modal-image" />
          <p className='enhanced-description'>{mount.enhanced_description}</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
