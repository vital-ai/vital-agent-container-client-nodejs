import { HaleyMessage } from './haleyMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyFileDownloadMessage
 */
export class HaleyFileDownloadMessage extends HaleyMessage {
  public fileScope?: string;
  public fileLength?: number;
  public fileURL?: string;
  public fileType?: string;
  public fileName?: string;
  public fileNodeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyFileDownloadMessage';
  }

  /**
   * Get property definitions for HaleyFileDownloadMessage
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFileNodeURI',
        tsPropertyName: 'fileNodeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
