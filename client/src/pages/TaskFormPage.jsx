import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from 'react-hot-toast';
import "./TaskFormPage.css";

export function TasksFormPage() {
    // Desestructuración de los métodos de 'react-hook-form'
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    // Función que se ejecuta al enviar el formulario
    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            // Si existe el parámetro 'id', actualiza la tarea
            await updateTask(params.id, data);
            toast.success("Tarea actualizada con éxito", {
                position: 'bottom-right',
                style: {
                    backgroundColor: '#1A237E', // Usando color de la paleta
                    color: '#fff',
                },
            });
        } else {
            // Si no existe el parámetro 'id', crea una nueva tarea
            await createTask(data);
            toast.success("Tarea creada con éxito", {
                position: 'bottom-right',
                style: {
                    backgroundColor: '#1A237E', // Usando color de la paleta
                    color: '#fff',
                },
            });
        }
        navigate("/tasks");
    });

    useEffect(() => {
        // Si el parámetro 'id' está presente, carga los datos de la tarea
        async function loadTask() {
            if (params.id) {
                const { data: { title, description } } = await getTask(params.id);
                setValue("title", title);
                setValue("description", description);
            }
        }
        loadTask();
    }, [params.id, setValue]);

    return (
        <div className="form-wrapper">
            {params.id ? <h2 className="titulo">Actualizar tarea</h2> : <h2 className="titulo">Crear tarea</h2>}
            <form onSubmit={onSubmit} className="form-container">
                <input
                    type="text"
                    placeholder="Título"
                    {...register("title", { required: true })}
                    className="input-field"
                />
                {errors.title && <span className="error-text">El título es obligatorio</span>}
                <textarea
                    rows="3"
                    placeholder="Descripción"
                    {...register("description", { required: true })}
                    className="textarea-field"
                ></textarea>
                {errors.description && <span className="error-text">La descripción es obligatoria</span>}
                <div className="button-group">
                    {params.id ? (
                        <button className="submit-btn">Actualizar tarea</button>
                    ) : (
                        <button className="submit-btn">Crear tarea</button>
                    )}
                    {params.id && (
                        <button
                            onClick={async () => {
                                const accepted = window.confirm(
                                    "¿Estás seguro de que deseas eliminar esta tarea?"
                                );
                                if (accepted) {
                                    // Si se confirma la eliminación, se elimina la tarea
                                    await deleteTask(params.id);
                                    toast.success("Tarea eliminada con éxito", {
                                        position: 'bottom-right',
                                        style: {
                                            backgroundColor: '#E3F2FD', // Usando color de la paleta
                                            color: '#0D47A1', // Usando color de texto
                                        },
                                    });
                                    navigate("/tasks");
                                }
                            }}
                            className="delete-btn"
                        >
                            Eliminar tarea
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}