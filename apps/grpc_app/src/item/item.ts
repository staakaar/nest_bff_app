/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "item";

export interface ItemRequest {
  id: number;
}

export interface ItemResponse {
  id: number;
  itemNo: number;
  name: string;
  quantity: number;
  unit: string;
  price: number;
  remark: string;
}

function createBaseItemRequest(): ItemRequest {
  return { id: 0 };
}

export const ItemRequest = {
  encode(message: ItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ItemRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ItemRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: ItemRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ItemRequest>, I>>(base?: I): ItemRequest {
    return ItemRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ItemRequest>, I>>(object: I): ItemRequest {
    const message = createBaseItemRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseItemResponse(): ItemResponse {
  return { id: 0, itemNo: 0, name: "", quantity: 0, unit: "", price: 0, remark: "" };
}

export const ItemResponse = {
  encode(message: ItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.itemNo !== 0) {
      writer.uint32(16).int32(message.itemNo);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.quantity !== 0) {
      writer.uint32(32).int64(message.quantity);
    }
    if (message.unit !== "") {
      writer.uint32(42).string(message.unit);
    }
    if (message.price !== 0) {
      writer.uint32(48).int64(message.price);
    }
    if (message.remark !== "") {
      writer.uint32(58).string(message.remark);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ItemResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.itemNo = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.quantity = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.unit = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.price = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.remark = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ItemResponse {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      itemNo: isSet(object.itemNo) ? Number(object.itemNo) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      unit: isSet(object.unit) ? String(object.unit) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
      remark: isSet(object.remark) ? String(object.remark) : "",
    };
  },

  toJSON(message: ItemResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.itemNo !== 0) {
      obj.itemNo = Math.round(message.itemNo);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.unit !== "") {
      obj.unit = message.unit;
    }
    if (message.price !== 0) {
      obj.price = Math.round(message.price);
    }
    if (message.remark !== "") {
      obj.remark = message.remark;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ItemResponse>, I>>(base?: I): ItemResponse {
    return ItemResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ItemResponse>, I>>(object: I): ItemResponse {
    const message = createBaseItemResponse();
    message.id = object.id ?? 0;
    message.itemNo = object.itemNo ?? 0;
    message.name = object.name ?? "";
    message.quantity = object.quantity ?? 0;
    message.unit = object.unit ?? "";
    message.price = object.price ?? 0;
    message.remark = object.remark ?? "";
    return message;
  },
};

export interface ItemService {
  GetItem(request: ItemRequest): Promise<ItemResponse>;
}

export const ItemServiceServiceName = "item.ItemService";
export class ItemServiceClientImpl implements ItemService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ItemServiceServiceName;
    this.rpc = rpc;
    this.GetItem = this.GetItem.bind(this);
  }
  GetItem(request: ItemRequest): Promise<ItemResponse> {
    const data = ItemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetItem", data);
    return promise.then((data) => ItemResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
