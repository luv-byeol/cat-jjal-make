function CreateBtn({handleFormSubmit}: any) {
  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="name" placeholder="영어 대사를 입력해주세요" />
      <button type="submit">생성</button>
    </form>
    </>
  )
}

export default CreateBtn;