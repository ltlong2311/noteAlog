import lodash, { cloneDeep, _ } from "lodash";

const [selectedList, setSelectedList] = useState<Array<number>>([]);

const clickItem = (item: any) => {
  // Cach 1:

  // const arr: Array<number> = selectedList; => Lưu ý:
  /* Vấn đề chính nằm ở đây, nếu không dùng cloneDeep (sao chép dữ liệu sang
  một vùng nhớ mới), khi arr được thay đổi, dữ liệu sẽ chỉ thay đổi trong cùng 1 vùng nhớ với biến state selectedList.  
  + Vậy nên sau đó nếu set state bằng arr (setSelectedList(arr);)
  -> setState sẽ không hoạt động, state sẽ không thay đổi,
  ***Bởi vì giá trị state sẽ không được set lại khi vùng nhớ không thay đổi
  mà ở đây arr có cùng 1 vùng nhớ với state sẽ gặp phải điều này.
  */
  const arr: Array<number> = _.cloneDeep(selectedList);
  const indexItem = selectedList.findIndex(
    (element: any) => element == item.id
  );
  if (indexItem > -1) {
    arr.splice(indexItem, 1);
  } else {
    arr.push(item?.id);
  }
  setSelectedList(arr);

  // Cach 2
  /* Hoạt động tốt, nhưng trong trường hợp bên trong state có chứa các object lồng nhau,
   việc rải [...arr] có thể sẽ không hoạt động cho object trong nó, object bên trong vẫn 
   sẽ có cùng 1 vùng nhớ cũ, sẽ gây ra vấn đề.
  */

  if (selectedList.includes(item?.id)) {
    const arr = selectedList.filter((value) => value !== item?.id);
    setSelectedList([...arr]);
  } else {
    setSelectedList((prev) => [...prev, item?.id]);
  }
};
