import { Modal } from 'antd';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  &.ant-modal {
    .ant-modal-header {
      border-bottom-width: 0;
      padding-bottom: 0;

      .ant-modal-title {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.6;
      }
    }
    .ant-modal-body {
      color: rgba(0, 0, 0, 0.85);
      font-size: 16px;
      line-height: 1.5;
      padding-top: 8px;

      .ant-form {
        label {
          color: rgba(0, 0, 0, 0.85);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
        }
        textarea {
          font-size: 16px;
          font-weight: normal;
          margin-bottom: 0;
        }
        .ant-form-item {
          margin-bottom: 0;
          margin-top: 16px;
          padding-bottom: 0px;
        }
        .ant-input {
          border: solid 2px rgba(0, 0, 0, 0.09);
        }
      }
    }
    .ant-modal-footer {
      border-top-width: 0;
      display: flex;
      justify-content: flex-end;
      padding: 20px;
      padding-top: 0;
    }
  }
`;

export default StyledModal;
