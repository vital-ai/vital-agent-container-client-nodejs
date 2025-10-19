import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#FileNode
 */
export class FileNode extends VITAL_Node {
  public fileScope?: string;
  public fileLength?: number;
  public fileURL?: string;
  public documentGenerated?: boolean;
  public fileType?: string;
  public fileName?: string;
  public kGDocumentGenerated?: boolean;
  public expirationDate?: string | Date;
  public kGFileType?: string;
  public profileURI?: string;
  public base64BinaryData?: string;
  public accountURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#FileNode';
  }

  /**
   * Get property definitions for FileNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasFileScope',
        tsPropertyName: 'fileScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasFileLength',
        tsPropertyName: 'fileLength',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasFileURL',
        tsPropertyName: 'fileURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isDocumentGenerated',
        tsPropertyName: 'documentGenerated',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasFileType',
        tsPropertyName: 'fileType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasFileName',
        tsPropertyName: 'fileName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isKGDocumentGenerated',
        tsPropertyName: 'kGDocumentGenerated',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasExpirationDate',
        tsPropertyName: 'expirationDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFileType',
        tsPropertyName: 'kGFileType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasProfileURI',
        tsPropertyName: 'profileURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBase64BinaryData',
        tsPropertyName: 'base64BinaryData',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
