import { Question } from './question';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FileQuestion
 */
export class FileQuestion extends Question {
  public fileScope?: string;
  public maxFileLength?: number;
  public fileTypeConstraint?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#FileQuestion';
  }

  /**
   * Get property definitions for FileQuestion
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
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFileTypeConstraint',
        tsPropertyName: 'fileTypeConstraint',
        type: 'string',
        required: false
      }
    ];
  }


}
