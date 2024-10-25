export const concurrencyRequests = (urls: string[], maxReq = 5) => {
  if (urls.length === 0) {
    return Promise.resolve([]);
  }

  const results: Response[] = []; // Mảng kết quả từ các requests
  let index = 0; // Chỉ số URL đang được xử lý
  let doneReq = 0; // Số lượng request đã hoàn thành

  async function request() {
    // Nếu đã xử lý xong thì thoát khỏi hàm
    if (index === urls.length) {
      return;
    }

    const i = index; // Lưu lại chỉ số URL đang được xử lý
    const url = urls[index++]; // Lấy URL đang được xử lý và tăng chỉ số lên 1

    try {
      results[i] = await fetch(url);
    } catch (error) {
      results[i] = error instanceof Response ? error : new Response(null, { status: 500 });
    } finally {
      // Tăng biến đếm và kiểm tra hoàn thành tất cả các yêu cầu
      if (++doneReq === urls.length) {
        return Promise.resolve(results);
      }

      // Đặt thời gian chờ 1 giây và sau đó gọi lại hàm yêu cầu
      setTimeout(request, 1000);
    }
  }

  // Số lần yêu cầu tối đa có thể được thực hiện đồng thời
  const times = Math.min(maxReq, urls.length);
  console.log(`:::001::`, times);

  // Bắt đầu thực hiện yêu cầu đồng thời
  Array.from({ length: times }, () => setTimeout(request, 1000));
};
