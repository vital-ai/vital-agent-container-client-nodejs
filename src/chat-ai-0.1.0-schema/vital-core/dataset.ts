import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Dataset
 */
export class Dataset extends VITAL_Node {
  public dateRetrieved?: string | Date;
  public sourceName?: string;
  public sourceUrl?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#Dataset';
  }

  /**
   * Get property definitions for Dataset
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasDateRetrieved',
        tsPropertyName: 'dateRetrieved',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSourceName',
        tsPropertyName: 'sourceName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSourceUrl',
        tsPropertyName: 'sourceUrl',
        type: 'string',
        required: false
      }
    ];
  }


}
