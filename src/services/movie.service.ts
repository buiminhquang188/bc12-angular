import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  // Observable sinh ra để xử lý code bất đồng bộ.
  /**
   * Có khả năng trả về nhiều kết quả, không giống như promise chỉ trả 1 kết quả khi thành công và thất bại và dừng
   * Khả năng huỷ bỏ request còn promise thì không,
   * Có thể xử lý kết quả trước khi nó trả về.
   */
  fetchAllMovie(): Observable<any> {
    const url =
      'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01';
    return this.http.get(url);
  }

  fetchMovieDetail(movieId: number): Observable<any> {
    const url = `http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`;
    return this.http.get(url);
  }
}
