import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CalendarEntry
 */
export class CalendarEntry extends VITAL_Node {
  public shortDescription?: string;
  public endDate?: string | Date;
  public startDate?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#CalendarEntry';
  }

  /**
   * Get property definitions for CalendarEntry
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasShortDescription',
        tsPropertyName: 'shortDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEndDate',
        tsPropertyName: 'endDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStartDate',
        tsPropertyName: 'startDate',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
