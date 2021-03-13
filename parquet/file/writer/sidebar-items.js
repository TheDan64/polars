initSidebarItems({"struct":[["InMemoryWriteableCursor","Use this type to write Parquet to memory rather than a file."],["SerializedFileWriter","A serialized implementation for Parquet [`FileWriter`]. See documentation on file writer for more information."],["SerializedPageWriter","A serialized implementation for Parquet [`PageWriter`]. Writes and serializes pages and metadata into output stream."],["SerializedRowGroupWriter","A serialized implementation for Parquet [`RowGroupWriter`]. Coordinates writing of a row group with column writers. See documentation on row group writer for more information."]],"trait":[["FileWriter","Parquet file writer API. Provides methods to write row groups sequentially."],["ParquetWriter",""],["RowGroupWriter","Parquet row group writer API. Provides methods to access column writers in an iterator-like fashion, order is guaranteed to match the order of schema leaves (column descriptors)."],["TryClone","TryClone tries to clone the type and should maintain the `Seek` position of the given instance."]]});