import { Answer } from './answer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FileAnswer
 */
export class FileAnswer extends Answer {
  public url?: string;
  /** URI reference to one of: Folder, Contract, Account, Document */
  public parentObjectURI?: string;
  public fileLength?: number;
  public fileType?: string;
  public deleteOnSuccess?: boolean;
  public fileName?: string;
  public fileNodeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#FileAnswer';
  }

  /**
   * Get property definitions for FileAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUrl',
        tsPropertyName: 'url',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasParentObjectURI',
        tsPropertyName: 'parentObjectURI',
        type: 'http://vital.ai/ontology/vital-aimp#Folder | http://vital.ai/ontology/vital-aimp#Contract | http://vital.ai/ontology/vital#Account | http://vital.ai/ontology/vital-nlp#Document',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasFileLength',
        tsPropertyName: 'fileLength',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasFileType',
        tsPropertyName: 'fileType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDeleteOnSuccess',
        tsPropertyName: 'deleteOnSuccess',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasFileName',
        tsPropertyName: 'fileName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFileNodeURI',
        tsPropertyName: 'fileNodeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
