import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FileUploadObject
 */
export class FileUploadObject extends Card {
  public fileScope?: string;
  public maxFileLength?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#FileUploadObject';
  }

  /**
   * Get property definitions for FileUploadObject
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMaxFileLength',
        tsPropertyName: 'maxFileLength',
        type: 'number',
        required: false
      }
    ];
  }


}
