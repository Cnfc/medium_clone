import React, { useState } from "react";

const ArticleForm = ({ onSubmit, errors, initialValues }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [tagList, setTagList] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ foo: "foo" });
  };
  return (
    <div className="editor-page">
      <div className="conteiner page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            BackendErrorMessage
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    value={title}
                    onChange={e => setTitle(e)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Write your artilce"
                    value={body}
                    onChange={e => setBody(e)}
                  ></textarea>
                </fieldset>

                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Tags"
                    value={tagList}
                    onChange={e => setTagList(e)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <button
                    type="submit"
                    className="btn btn-lg pull-xs-right btn-primary"
                  >
                    Publish Article
                  </button>
                </fieldset>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      ArticleForm
    </div>
  );
};

export default ArticleForm;
